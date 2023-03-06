const {TweetRepository} = require('../repository/index')
class TweetService
{

    constructor ()
    {
        this.tweetRepository = new TweetRepository();
    }

   async create(data)
    {
        const content  = data.content;
        // regex to extract #tags
        const tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((tag)=> tag.substring(1));
        /* 
            1. bulk create in mongoose
            2. filter title of hashtag based on multiple tags
            3. How to add tweet id inside all the hashtags
        */

        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        return tweet;

    }

}


