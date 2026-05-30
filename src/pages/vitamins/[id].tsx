import VitaminDetail from '../../page-components/VitaminDetail'
import { vitamins } from '../../data/vitamins'

export default VitaminDetail

export async function getStaticPaths() {
  return {
    paths: vitamins.map((v) => ({ params: { id: v.id } })),
    fallback: false,
  }
}

export async function getStaticProps() {
  return { props: {} }
}
