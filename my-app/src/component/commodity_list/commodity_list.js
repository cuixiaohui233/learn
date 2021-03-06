/**
 * Created by tcsd on 17/11/26.
 */
import React,{Component} from 'react';
import ShopList from './shop_list';
console.log(ShopList);


class CommodityList extends Component{
    constructor(){
        super();
        this.state = {
            listdata : [{
                id: 1,
                name: "冬韩版加绒羊羔毛牛仔外套女连帽大毛领棉服保暖外套宽松加厚棉衣",
                price: 139,
                comm_img: "http://s3.mogucdn.com/mlcdn/c45406/171116_4h8h96hi1hg861l80cjhk4fh3a78f_640x960.jpg_240x360.v1cAC.70.webp"
            },
                {
                    id: 2,
                    name: "秋冬韩版纯色百搭半高领坑条宽松喇叭袖套头蓝色毛衣针织衫上衣女",
                    price:64.9,
                    comm_img: "http://s3.mogucdn.com/mlcdn/c45406/171107_4a683779b408l8j948lh9d2059jg8_640x960.jpg_240x360.v1cAC.70.webp"
                },
                {
                    id:3,
                    name: "冬季新款收腰加厚大毛领棉服女中长款连帽棉袄宽松百搭棉衣外套潮",
                    price: 139,
                    comm_img: "http://s3.mogucdn.com/mlcdn/c45406/171116_5h7f65l0g4gc92b148e08bj2ad390_640x960.jpg_240x360.v1cAC.70.webp"
                },
                {
                    id: 4,
                    name: "17韩版冬季新款加厚夹棉直筒宽松中长格子时尚显瘦毛呢大衣外套",
                    price: 139,
                    comm_img:"http://s3.mogucdn.com/mlcdn/c45406/171030_3887cfkidc8adag5d4hi29geh9gle_640x960.jpg_240x360.v1cAC.70.webp"
                },
                {
                    id: 5,
                    name:"冬季新款韩版时尚连帽大毛领口袋毛毛棉衣收腰显瘦保暖棉衣外套女",
                    price: 139,
                    comm_img: "http://s3.mogucdn.com/mlcdn/c45406/171124_1j64cdl85eff0hkag5j2jb3a42kbd_640x960.jpg_240x360.v1cAC.70.webp"
                },
                {
                    id: 6,
                    name: "秋冬新款韩版宽松百搭时尚大毛领连帽中长款拉链棉服长袖外套女潮",
                    price: 139,
                    comm_img: "http://s3.mogucdn.com/mlcdn/c45406/171116_02e2d2ch09f4eh9l4kba7627geajh_640x960.jpg_240x360.v1cAC.70.webp"
                },]
        }
    }

    render(){
        let item = null;
        let {listdata} = this.state;
        let listdata1 = Object.assign(listdata);
        item = listdata1.map((e,i)=>{
            let data = {
                name:e.name,
                price:e.price,
                comm_img:e.comm_img,
                key:i
            }
            return <ShopList {...data} />;
        })

        return(
            <div>
                <div className="shop_nav">
                    <div className="shop_nav_item"><span>商品页</span><span>购物车</span></div>
                </div>
                <ul className="commoddity_list">
                    {item}
                </ul>
            </div>
        )
    }
}

export default CommodityList;