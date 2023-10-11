import SectionContactUs from '@/components/template/SectionContactUs'
import BlogContainer from '@/components/template/blogContainer'
import CofeeClub from '@/components/template/cofeeClub'
import Footer from '@/components/template/footer'
import Header from '@/components/template/header'
import SectionBestSelling from '@/components/template/sectionBestSelling'
import SectionNewProduct from '@/components/template/sectionNewProduct'
import SectionServices from '@/components/template/sectionServices'


export default function Home() {
  return (
    <div>
      <Header status="homePage" />
      <SectionNewProduct />
      <SectionBestSelling />
      <CofeeClub />
      <BlogContainer />
      <SectionContactUs />
      <SectionServices />
      <Footer />
    </div>

  )
}
