import { Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductHomeScreen from './components/productHomeScreen.jsx';
import 'swiper/css';
import 'swiper/css/pagination';

const HomePage = ({top10BySales}) => {
    console.log(top10BySales);
    return (
        <div className='pt-12'>
            <Swiper
                direction="vertical"
                pagination={{ clickable: true }}
                mousewheel={true}
                modules={[Pagination, Mousewheel]}
                className="mySwiper w-screen h-[800px]"
            >
                {top10BySales.map((product) => (
                    <SwiperSlide
                        key={product.id}
                        className="flex justify-between items-center w-screen h-[800px] p-12"
                    >
                        <ProductHomeScreen product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default HomePage;
