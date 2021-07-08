import axios from 'axios';

const CONSUMER_API_BASE_URL = "http://ec2-52-201-202-143.compute-1.amazonaws.com:8081/cg/ebs";

class ConsumerService {

  
    validateConsumer(consumer){
        return axios.post(CONSUMER_API_BASE_URL + '/consumer' , consumer);
    }
    
    }
   
    


    
    

export default new ConsumerService()
