const AboutPage = () => {
    return (
        <div className="pt-12 flex justify-center h-full">
            <div className="w-3/4 gap-5 flex flex-col">
                <h1 className="font-bold text-4xl mb-3">ABOUT</h1>
                <div className="w-2/3">
                    <h1 className="text-2xl font-bold">What is this?</h1>
                    <p className="">This is Zyrel's submission for his Web development 3 course. The goal of the assignment is to create an ecommerce website using React, and other technologies that deemed to be useful.</p>
                </div>
                <div className="w-2/3">
                    <h1 className="text-2xl font-bold">Personal Thoughts (Small Ramble)</h1>
                    <p>The main design inspirations for this project is Uniqlo and Abercrombie & Fitch, because they have been the main outlets I have been shopping from lately and where I bought most of my clothes.
                        Through out the project I used coloured divs in replacement of images since the JSON did not include any, but then I had the idea to design the website with random pops of colour. The idea was
                        was not ideal because in a real situation I would think it would impact how products appear to the user. The idea of doing an ecommerce website sounded great to me because I really do enjoy
                        doing Frontend development and once and a while my social media feed would be filled with design analysis of ecommerce websites. Though not much of the info stuck with me. 
                    </p>
                </div>
                <div className="w-2/3">
                    <h1 className="text-2xl font-bold">Technologies Used</h1>
                    <ul className="list-disc list-inside">
                        <li>React.js - Main framework used for building the website.</li>  
                        <li>Swiperjs - Used for the home page.</li>
                        <li>Chart.js - Used for the admin dashboard charts.</li>
                        <li>Tailwind CSS - Used for styling the website.</li>
                        <li>Headless IU - Used for the Destination and Shipping input in cart page.</li>
                        <li>React Icons - Used for the icons throughout the site.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;