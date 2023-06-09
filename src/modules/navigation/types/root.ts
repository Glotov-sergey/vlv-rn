export type RootStackParams = {
  Home: HomeStackParams
  Catalog: undefined
  Profile: undefined
  Cart: undefined
  Wishlist: undefined
}

export type HomeStackParams = {
  HomeScreen: undefined
  HomeCategory: {
    collection_id: number
  }
}
