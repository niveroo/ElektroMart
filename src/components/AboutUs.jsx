import '../styles/AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about-us">
            <h2>About Us</h2>
            <p>
                At <strong>ElektroMart</strong>, we specialize in offering a wide range of cutting-edge electronics
                from trusted global brands. From smartphones and laptops to home entertainment systems and accessories,
                we are dedicated to providing high-quality products that meet your tech needs.
            </p>

            <div>
                <h3>Contact Information:</h3>
                <ul>
                    <li><strong>Phone:</strong> +1 (800) 123-4567</li>
                    <li><strong>Address:</strong> 123 Tech Avenue, Suite 456, Silicon City, CA 94043</li>
                    <li>
                        <strong>Website:</strong> <a href="https://www.ElektroMart.com" >http://127.0.0.1:5173/</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;