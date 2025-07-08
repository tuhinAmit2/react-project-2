import {Carousel} from 'react-bootstrap';
import BannerImage from "../bannerImage/BannerImage";
import banner1 from '../../assets/banners/Banner1.webp';
import banner2 from '../../assets/banners/Banner2.webp';
import banner3 from '../../assets/banners/Banner3.webp';

export default function BannerContainer({...props}) {
    return (
        <div {...props}>
            <Carousel interval={3000} pause={false} fade>
                <Carousel.Item>
                    <BannerImage imagePath={banner1} bootstrapClass="d-block w-100 h-50"
                                 alternativeText="With Every purchase get 10% discount"/>
                    {/*<Carousel.Caption>
                        <h3>Slide 1</h3>
                        <p>This is the first slide</p>
                    </Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item>
                    <BannerImage imagePath={banner2} bootstrapClass="d-block w-100 h-50"
                                 alternativeText="Special 20% discount on wednesday"/>
                </Carousel.Item>
                <Carousel.Item>
                    <BannerImage imagePath={banner3} bootstrapClass="d-block w-100 h-50"
                                 alternativeText="Get 30% discount on your first purchase"/>
                </Carousel.Item>
            </Carousel>
        </div>
    );

}