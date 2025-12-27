import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.tugpfto.mongodb.net/?appName=Cluster0`;
const dbName=process.env.DB_NAME;

export const collections={
    USERS:"users",
    SERVICES:"services"
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect=async (cname)=>{
  try{
    const db=client.db(dbName);
    console.log("MongoDB Connected");
    return db.collection(cname);
  }catch(e){
    console.log(e);
  }
}

