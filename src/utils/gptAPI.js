import OpenAI from 'openai';


const GPT_API_KEY = "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";

const openai = new OpenAI({
    apiKey: GPT_API_KEY, 
    dangerouslyAllowBrowser : true,
  });

export default openai;