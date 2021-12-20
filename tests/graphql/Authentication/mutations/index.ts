export const signUpMutation = /* GraphQL */ `
  mutation signUp($data: SignUpInput!) {
    signUp(data: $data) {
      id
      createdAt
      updatedAt
      disabled
      name
      nickName
    }
  }
`

export const signInMutation = /* GraphQL */ `
  mutation signIn($name: String!, $password: String!) {
    signIn(name: $name, password: $password) {
      token
    }
  }
`

export const changePasswordMutaion = /* GraphQL */ `
  mutation changePassword($password: String!, $newPassword: String!) {
    changePassword(password: $password, newPassword: $newPassword) {
      token
    }
  }
`

export const updateProfileMutation = /* GraphQL */ `
  mutation updateProfile($data: UpdateProfileInput!) {
    updateProfile(data: $data) {
      id
      createdAt
      updatedAt
      disabled
      name
      nickName
    }
  }
`
