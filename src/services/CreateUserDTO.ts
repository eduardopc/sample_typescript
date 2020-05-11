interface TechsType {
  tech: string,
  experience: string
}

interface CreateUserDTO {
  name?: string,
  email: string,
  password: string,
  lastWorks?: string[],
  techs: Array<string | TechsType>
}

// export function createUser(data: CreateUserDTO) {
export default function createUser({ name, email, password, lastWorks, techs }: CreateUserDTO) {
  const user = {
    name: name,
    email: email,
    password: password,
    lastWorks: lastWorks,
    techs: techs
  }

  return user;
}