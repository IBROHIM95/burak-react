import {serverApi} from '../../lip/config';
import { Product, ProductInquery } from '../../lip/types/product';
import axios from 'axios';


class ProductService {
    private readonly path:string;

    constructor() {
        this.path = serverApi
    }

    public async getProducts(input : ProductInquery): Promise<Product[]>{
        try{

            let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`
            if(input.productCollection)
                url += `&productCollection=${input.productCollection}`;
            if(input.search) 
                url += `&search=${input.search}`
            console.log('search', input.search);
            

            const result = await axios.get(url);
             console.log('getProducts1', result);
             console.log('data', result.data);
             
            return result.data
        }catch(err) {
            console.log('Error, getProduct:', err);
            throw err
            
        }
    }

    public async getProduct(productId: string): Promise<Product>  {

        try{
            const url = `${this.path}/product/${productId}`;
            const result = await axios.get(url, {withCredentials: true})

            return result.data
        }catch(err){
            console.log('Error, getProduct:', err);
            throw err
        }
    }
}

export default ProductService