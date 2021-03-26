export class Rating {
  constructor(
    public rating: number,
    private comment: string,
    private author: string,
    public festival: number
  ) {}
}
