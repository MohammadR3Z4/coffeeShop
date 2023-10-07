import Header from '@/components/template/header'
import Navbar from '@/components/template/navbar'
import SectionNewProduct from '@/components/template/sectionNewProduct'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header status="homePage" />
      <SectionNewProduct />
    </div>

  )
}
