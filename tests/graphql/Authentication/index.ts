import ErrorDefine from '../../../src/errors/context'
import { getTestUtils } from '../../testUtils'
import {
  changePasswordMutaion,
  signInMutation,
  signUpMutation,
  updateProfileMutation
} from './mutations'
import { meQuery } from './queries'

export function Authentication(): void {
  describe('Authentication - signIn', () => {
    it(`should throw ${ErrorDefine.UserNotExist.message}`, async () => {
      const { graphqlClient } = getTestUtils()

      const variables = {
        name: 'nobody',
        password: 'nobody'
      }

      expect(async () => {
        await graphqlClient.request(signInMutation, variables)
      }).rejects.toThrowError(ErrorDefine.UserNotExist.message)
    })

    it(`should throw ${ErrorDefine.PasswordIncorrect.message}`, async () => {
      const { graphqlClient } = getTestUtils()

      const variables = {
        name: 'admin',
        password: 'ErrorPassword'
      }

      expect(async () => {
        await graphqlClient.request(signInMutation, variables)
      }).rejects.toThrowError(ErrorDefine.PasswordIncorrect.message)
    })

    it(`should throw ${ErrorDefine.UserDisabled.message}`, async () => {
      const { graphqlClient } = getTestUtils()

      const variables = {
        name: 'disabledUser',
        password: 'disabledUser'
      }

      expect(async () => {
        await graphqlClient.request(signInMutation, variables)
      }).rejects.toThrowError(ErrorDefine.UserDisabled.message)
    })

    it(`should throw ${ErrorDefine.Unauthenticated.message}`, async () => {
      const { graphqlClient } = getTestUtils()

      expect(async () => {
        await graphqlClient.request(meQuery)
      }).rejects.toThrowError(ErrorDefine.Unauthenticated.message)
    })

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
  })

  describe('Resolver - after signIn', () => {
    it(`should throw ${ErrorDefine.Unique.message} when signUp with admin`, async () => {
      const { graphqlClient } = getTestUtils()

      const variables = {
        data: { name: 'admin', nickName: 'admin', password: 'admin' }
      }

      expect(async () => {
        await graphqlClient.request(signUpMutation, variables)
      }).rejects.toThrowError(ErrorDefine.Unique.message)
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

    it('should change password admin', async () => {
      const { graphqlClient } = getTestUtils()
      const variables = {
        password: 'admin',
        newPassword: 'admin'
      }
      const response = await graphqlClient.request(
        changePasswordMutaion,
        variables
      )

      expect(response).toHaveProperty('changePassword')
      expect(response.changePassword).toHaveProperty('token')
    })
  })
}
