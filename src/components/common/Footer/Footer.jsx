import Icon from "./Fragments/Icon";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-slate-950 mt-10 text-white primary-border-t">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:px-6 py-10 container">
        <div>
          <h3 className="footer-title">فروشگاه آنلاین</h3>
          <p className="footer-text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
          <div className="flex-itc gap-3 mt-4">
            <Icon icon={<FaWhatsapp />} />
            <Icon icon={<FaTelegram />} />
            <Icon icon={<FaInstagram />} />
          </div>
        </div>
        <ul>
          <h3 className="footer-title">خدمات مشتریان</h3>
          <li className="footer-text">
            <Link className="hover:text-white duration-150">پیگیری سفارش</Link>
          </li>
          <li className="footer-text">
            <Link className="hover:text-white duration-150">
              روش های بازگرداندن کالا
            </Link>
          </li>
          <li className="footer-text">
            <Link className="hover:text-white duration-150">
              شیوه‌های پرداخت
            </Link>
          </li>
          <li className="footer-text">
            <Link className="hover:text-white duration-150">راهنمای خرید</Link>
          </li>
          <li className="footer-text">
            <Link className="hover:text-white duration-150">سوالات متداول</Link>
          </li>
        </ul>
        <ul>
          <h3 className="footer-title">دسترسی سریع</h3>
          <li className="footer-text">
            <Link className="hover:text-white duration-150">درباره ما</Link>
          </li>
          <li className="footer-text">
            <Link className="hover:text-white duration-150">تماس با ما</Link>
          </li>
          <li className="footer-text">
            <Link className="hover:text-white duration-150">فرصت‌های شغلی</Link>
          </li>
          <li className="footer-text">
            <Link className="hover:text-white duration-150">
              قوانین و مقررات
            </Link>
          </li>
          <li className="footer-text">
            <Link className="hover:text-white duration-150">حریم خصوصی</Link>
          </li>
        </ul>
        <ul>
          <h3 className="footer-title">اطلاعات تماس</h3>
          <li className="footer-text flex-itc gap-1">
            <IoCallOutline />
            <span>09000000000</span>
          </li>
          <li className="footer-text flex-itc gap-1 flex-wrap">
            <MdOutlineEmail />
            <p className="max-w-10 text-wrap">example@gmail.com</p>
          </li>
          <li className="footer-text flex-itc gap-1">
            <IoLocationOutline />
            <span>خرمشهر</span>
          </li>
        </ul>
      </div>
      <div className="primary-border-t bg-black py-3 text-center text-xs">
        ساخته شده توسط محمد حسن عبیدی پور
      </div>
    </footer>
  );
};

export default Footer;
