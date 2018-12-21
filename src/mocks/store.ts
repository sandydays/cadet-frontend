import { Store } from 'redux'
import configureStore from 'redux-mock-store'

import {
  defaultAcademy,
  defaultApplication,
  defaultPlayground,
  defaultSession,
  defaultWorkspaceManager,
  IState
} from '../reducers/states'

const mockStore = configureStore([])

export function mockInitialStore<P>(): Store<IState> {
  const state: IState = {
    academy: defaultAcademy,
    application: defaultApplication,
    playground: defaultPlayground,
    workspaces: defaultWorkspaceManager,
    session: defaultSession
  }
  return mockStore(state) as any
}
