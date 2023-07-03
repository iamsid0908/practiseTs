import mongoose, { Schema, Document } from 'mongoose';
import { Interface } from 'readline';


// interface Image {
//     url: string;
//     priority?: number;
//   }

//   interface Diamond {
//     name?: string;
//     color?: string;
//     clarity?: string;
//     quality?: string;
//     quantity?: string;
//     carat?: string;
//   }
export interface Vproducts extends Document  {
    name: string;
    displayprice: number;
    description: string;
    strikethroughprice: string;
    images: {
      url: string;
      priority?: number;
    }[];
    stock: number;
    category: string;
    subcategory: string;
    weight?: number;
    size: number[];
    avaragerating?: number;
    gender?: string;
    isActive?: boolean;
    diamonds?: {
      name?: string;
      color?: string;
      clarity?: string;
      quality?: string;
      quantity?: string;
      carat?: string;
    }[];
    user?: string;
    createdAt?: Date;
  }
  
const ProductSchema: Schema =new Schema({
    name:{
        type:String,
        required:true
    },
    displayprice:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    strikethroughprice:{
        type:String,
        required:true
    },
    images:[
        {
            url:{
                type:String,
                // required:true
            },
            priority:{
                type:Number,
                // required:true
            }
        }
    ],
    stock:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subcategory:{
        type:String,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    size:[],
    avaragerating:{
        type:Number
    },
    gender:{
        type:String
    },
    isActive:{
        type:Boolean
    },
    diamonds:[
        {
            name:{
                type:String
            },
            color:{
                typr:String
            },
            clarity:{
                type:String
            },
            quality:{
                type:String
            },
            quantity:{
                type:String
            },
            carat:{
                type:String
            }
        }
    ],
    user:{
        // type:mongoose.Schema.ObjectId,
        // ref:"User",
        // require:true
    },

    createdAt:{
        type:Date,
        default:Date.now
    }


})

export default mongoose.model<NonNullable<Vproducts>>('Product',ProductSchema)
