export interface UserJSON {
  id: number
  name: string
}

export class User {
  public id: number
  public name: string

  public static fromJSON(json: UserJSON): User {
    const user = new User()
    user.id = json.id
    user.name = json.name

    return user
  }
}
