export class Seed {
    id:number;
    seedName:string;
    bloomSeason:string;
    typesOfSeeds:string;
    seedsStock:number;
    seedsPerPacket:number;
    image:string;
    about:string;
    discount:number;
    price:number;
    starRating:number;

    constructor(
        id:number,
        seedName:string,
        bloomSeason:string,
        typesOfSeeds:string,
        seedsStock:number,
        seedsPerPacket:number,
        image:string,
        about:string,
        discount:number,
        price:number,
        starRating:number
    )
    {
        this.id = id;
        this.seedName = seedName;
        this.bloomSeason = bloomSeason;
        this.typesOfSeeds = typesOfSeeds;
        this.seedsStock = seedsStock;
        this.seedsPerPacket = seedsPerPacket;
        this.image = image;
        this.about = about;
        this.discount = discount;
        this.price = price;
        this.starRating = starRating;
    }
}
