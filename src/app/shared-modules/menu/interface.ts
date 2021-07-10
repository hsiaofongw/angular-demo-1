export interface IMenuItem {
  path: string;
  name: string;
  children?: IMenuItem[];
}
