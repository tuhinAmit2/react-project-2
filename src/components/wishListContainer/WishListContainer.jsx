import WishListedItem from "../wishListedItem/WishListedItem";

export default function WishListContainer({type}) {

    const CusotmMenuTag = type;
    return (
        <CusotmMenuTag>
            <WishListedItem title="title" description={"description"}/>
        </CusotmMenuTag>
    );

}