// data/Jackets.ts
// This file simulates an API response by providing static jacket data.


// Define the TYPE of a single Jacket object
export type Jacket = {
  JacketId: number;      
  JacketName: string;    
  Brand: string;         
  cost: number;          
  JacketType: string;    
  MadeIn: string;        
};

// Create the static array of 15 jackets
export const Jackets: Jacket[] = [
  {
    JacketId: 1,
    JacketName: 'Alpine Pro',
    Brand: 'The North Face',
    cost: 249,
    JacketType: 'Parka',
    MadeIn: 'Vietnam',
  },
  {
    JacketId: 2,
    JacketName: 'Storm Shield',
    Brand: 'Columbia',
    cost: 189,
    JacketType: 'Windbreaker',
    MadeIn: 'Bangladesh',
  },
  {
    JacketId: 3,
    JacketName: 'Peak Performer',
    Brand: 'Patagonia',
    cost: 320,
    JacketType: 'Softshell',
    MadeIn: 'USA',
  },
  {
    JacketId: 4,
    JacketName: 'Arctic Guard',
    Brand: 'Canada Goose',
    cost: 895,
    JacketType: 'Down Jacket',
    MadeIn: 'Canada',
  },
  {
    JacketId: 5,
    JacketName: 'Trail Blazer',
    Brand: 'REI Co-op',
    cost: 159,
    JacketType: 'Fleece',
    MadeIn: 'China',
  },
  {
    JacketId: 6,
    JacketName: 'Summit Seeker',
    Brand: 'Arc\'teryx',
    cost: 550,
    JacketType: 'Hardshell',
    MadeIn: 'Canada',
  },
  {
    JacketId: 7,
    JacketName: 'Urban Commuter',
    Brand: 'Uniqlo',
    cost: 89,
    JacketType: 'Puffer',
    MadeIn: 'Japan',
  },
  {
    JacketId: 8,
    JacketName: 'Winter Warrior',
    Brand: 'Marmot',
    cost: 275,
    JacketType: 'Parka',
    MadeIn: 'Indonesia',
  },
  {
    JacketId: 9,
    JacketName: 'Cloud Runner',
    Brand: 'Nike',
    cost: 130,
    JacketType: 'Windbreaker',
    MadeIn: 'Vietnam',
  },
  {
    JacketId: 10,
    JacketName: 'Ice Breaker',
    Brand: 'Icebreaker',
    cost: 210,
    JacketType: 'Merino Wool',
    MadeIn: 'New Zealand',
  },
  {
    JacketId: 11,
    JacketName: 'Ridge Runner',
    Brand: 'Salomon',
    cost: 299,
    JacketType: 'Softshell',
    MadeIn: 'France',
  },
  {
    JacketId: 12,
    JacketName: 'Frost Fighter',
    Brand: 'Eddie Bauer',
    cost: 199,
    JacketType: 'Down Jacket',
    MadeIn: 'China',
  },
  {
    JacketId: 13,
    JacketName: 'Glacier Guard',
    Brand: 'Outdoor Research',
    cost: 340,
    JacketType: 'Hardshell',
    MadeIn: 'USA',
  },
  {
    JacketId: 14,
    JacketName: 'Forest Ranger',
    Brand: 'Fjällräven',
    cost: 380,
    JacketType: 'Fleece',
    MadeIn: 'Sweden',
  },
  {
    JacketId: 15,
    JacketName: 'Velocity Wind',
    Brand: 'Adidas',
    cost: 115,
    JacketType: 'Windbreaker',
    MadeIn: 'Cambodia',
  },
];