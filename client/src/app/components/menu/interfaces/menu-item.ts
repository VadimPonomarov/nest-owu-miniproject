export interface IMenuItem {
  name: string,
  icon: string,
  url: string,
  children?: IMenuItem[]
}
