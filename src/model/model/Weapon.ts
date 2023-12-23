export type Weapon = {
  id: number,
  name: string,
  type: string,
  level: number,
  exp: number,
  attributes?: WeaponAttribute[],
}

interface WeaponAttribute {
  attribute: Attribute
  value: number
}

interface Attribute {
  id: number
  name: string
}
