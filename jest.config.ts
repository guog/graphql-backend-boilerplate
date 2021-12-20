import type { InitialOptionsTsJest } from 'ts-jest'
import { defaults as tsjPreset } from 'ts-jest/presets'

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: false,
      compiler: 'typescript',
      isolatedModules: false
    }
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    ...tsjPreset.transform
  },
  testMatch: ['**/tests/**/*.test.(ts|js)'],
  setupFilesAfterEnv: ['./tests/testSetup.ts']
}

export default config
