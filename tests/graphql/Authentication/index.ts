import {
  signInMutation,
  signUpMutation,
  changePasswordMutaion,
  updateProfileMutation
} from './mutations'
import { meQuery } from './queries'

import { getTestUtils } from '../../testUtils'
import { testHost } from '../../testSetup'

export function Authentication(): void {
  it('should signIn with admin', async () => {
    const { graphqlClient, setAuthToken } = getTestUtils()

    const variables = {
      name: 'admin',
      password: 'admin'
    }

    const response = await graphqlClient.request(signInMutation, variables)

    expect(response).toHaveProperty('signIn')
    expect(response.signIn).toHaveProperty('token')

    //! GQL client is replaced with authenticated one.
    setAuthToken(response.signIn.token)
  })
  it('should signUp user', async () => {
    const { graphqlClient } = getTestUtils()
    const variables = {
      data: { name: 'zhangsan', nickName: '张三', password: 'zhangsan' }
    }
    const response = await graphqlClient.request(signUpMutation, variables)

    expect(response).toHaveProperty('signUp')
    expect(response.signUp).toHaveProperty('id')
    expect(response.signUp).toHaveProperty('name')
    expect(response.signUp.name).toEqual(variables.data.name)
    expect(response.signUp.nickName).toEqual(variables.data.nickName)
  })

  describe('Resolver - after signIn', () => {
    const variables = {
      data: {
        nickName: 'NickName'
      }
    }

    it('should update user profile', async () => {
      const { graphqlClient } = getTestUtils()

      const response = await graphqlClient.request(
        updateProfileMutation,
        variables
      )

      expect(response).toHaveProperty('updateProfile')
      expect(response.updateProfile).toHaveProperty('id')
      expect(response.updateProfile).toHaveProperty('name')
      expect(response.updateProfile).toHaveProperty('updatedAt')
      expect(response.updateProfile.nickName).toEqual(variables.data.nickName)
    })

    /* it('should throw error when invalid gender value is given', async () => {
      const { graphqlClient } = getTestUtils()

      const vars = {
        user: {
          name: 'HelloBro',
          gender: 'invalid'
        }
      }

      expect(async () => {
        await graphqlClient.request(updateProfileMutation, vars)
      }).rejects.toThrow()
    }) */

    it('should query me and get updated nickName', async () => {
      const { graphqlClient } = getTestUtils()
      const response = await graphqlClient.request(meQuery)

      expect(response).toHaveProperty('me')
      expect(response.me).toHaveProperty('id')
      expect(response.me).toHaveProperty('name')
      expect(response.me).toHaveProperty('createdAt')
      expect(response.me).toHaveProperty('disabled')
      expect(response.me.disabled).not.toEqual(true)
      expect(response.me).toHaveProperty('updatedAt')
      expect(response.me).toHaveProperty('nickName')
      expect(response.me.nickName).toEqual(variables.data.nickName)
    })
  })
}
