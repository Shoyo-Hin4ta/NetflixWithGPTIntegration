import OpenAI from 'openai';


const GPT_API_KEY = process.env.REACT_APP_GPT_API_KEY;

const openai = new OpenAI({
    apiKey: GPT_API_KEY, 
    dangerouslyAllowBrowser : true,
  });

export default openai;