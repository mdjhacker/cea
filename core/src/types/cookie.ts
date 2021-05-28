export type CookieMap = Map<string, Map<string, string>>

export type CookieRawObject = {
  [
    key in
      | `campusphere::${'/authserver' | '/iap' | '/'}`
      | `swms::${'/authserver' | '/iap' | '/'}`
  ]: string
}

export interface FetchCookieOptions {
  type?: 'json' | 'form'
  cookiePath?: string
  body?: string
  isPost?: boolean
}
