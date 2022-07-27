interface MenuData {
  /** 菜单路径 */
  path: string
  /** 菜单名称 */
  title: string
  /** 菜单icon */
  icon?: string
  /** 二级菜单 */
  children?: MenuData[]

  line?: boolean
}

interface RestaurantItem {
  value: string
  link: string
  index: number
  id?: number
}