
import CartList from "@/components/CartList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";


export default function Home() {
  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div>
        <CartList/>
        <Menu/>
      </div>
    </div>
  );
}
