<p align="center">
  <a href="https://www.npmjs.com/package/nestjs-paginate-mongo"><img src="https://img.shields.io/npm/dm/nestjs-paginate-mongo.svg" alt="Total Downloads"></a>
  <a href="https://www.npmjs.com/package/nestjs-paginate-mongo"><img src="https://img.shields.io/npm/v/nestjs-paginate-mongo.svg" alt="Latest Stable Version"></a>
</p>

# Nestjs Paginate Mongo

A simple and fast way to paginate your mongoose query results on Nestjs

## How to use

To paginate items, you just need to call the function and pass the query as parameter. Just like this :
```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { paginate } from 'nestjs-paginate-mongo';
import { Post, PostDocument } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly posts: Model<PostDocument>,
  ) {}
  
  findAll() {
    return paginate(this.posts.find());
  }
}
```
And voila, you got your paginated data.

## Contribution

- If you have any problem about this package or a suggestion, dont hesitate to inform me by creating an [issue](https://github.com/sidikfaha/nestjs-paginate-mongo/issues/new)
- Are you a lovely developer and you think you can help by fixing a submitted issue ? Then I'll be glad to merge a PR from you 😊

## Support me

Enjoying this little package ? You can support me 🙏

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/aboubakart)

