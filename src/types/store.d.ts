type RootState = ReturnType<typeof import('../store').store.getState>

type AppDispatch = typeof import('src/store').store.dispatch
