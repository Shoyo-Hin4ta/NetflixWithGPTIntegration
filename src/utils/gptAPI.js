import OpenAI from 'openai';


const GPT_API_KEY = "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";


const openai = new OpenAI({
    apiKey: GPT_API_KEY, 
  });

export default openai;