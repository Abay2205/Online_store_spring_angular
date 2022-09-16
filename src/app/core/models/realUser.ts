export class RealUser {
  id: number;
  name: string;
  username: string;
  password: string;
  roles: [
    {
      id: number;
      name: string;
    }
  ];
}
