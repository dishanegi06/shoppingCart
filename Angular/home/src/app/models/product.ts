export default class Product{
    _id:string;
    title:string;
    slug:string;
    desc:string;
    category:string;
    price:number;
    image:string;
    image2:string;
    
constructor(_id:string,
    title:string,
    slug:string,
    desc:string,
    category:string,
    price:number,
    image:string,
    image2:string,)
{
this._id=_id
this.title=title
this.slug=slug
this.desc=desc
this.category=category
this.price=price
this.image=image
this.image2=image2
}
}