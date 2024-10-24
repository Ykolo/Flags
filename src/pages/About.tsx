import Navigation from '../components/Navigation'
import { cn } from '../libs/utils'

const About = () => {
  return (
    <div>
      <Navigation />
      <div
        className={cn('m-8 flex flex-col items-center justify-center text-2xl')}
      >
        <h1 className={cn('text-4xl')}>A propos</h1>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          quisquam nemo repellat suscipit excepturi cum, reiciendis accusantium
          repellendus deleniti ducimus. Minus quibusdam labore beatae quia?
          Incidunt hic harum sed quia cum ipsam labore qui, ducimus, eum
          delectus nulla est unde iusto. Tempora, atque quas? Ex expedita, vitae
          repellat laboriosam numquam delectus nihil animi in et? Laboriosam,
          laudantium. Ex corrupti repudiandae molestiae, ipsa esse sequi
          voluptatum reprehenderit nam fugit culpa totam cupiditate, facere
          ipsum est quis neque, vitae eveniet tenetur asperiores! Dolorum itaque
          totam iusto recusandae harum sapiente odio deserunt facere ut fugit
          eveniet omnis iure doloremque commodi, nesciunt consectetur architecto
          earum ipsum dolorem. Esse consectetur exercitationem dolorem quo odio
          saepe recusandae enim. Est porro magnam error quibusdam rerum, nam
          dolores esse deserunt officiis corrupti sint officia eos ducimus
          voluptate quis impedit, eum reprehenderit. Cupiditate minus recusandae
          labore aliquid! Nobis dolor eius minima atque perspiciatis ducimus,
          fugit aperiam accusantium recusandae obcaecati impedit optio nisi
          repudiandae. Distinctio hic ea fugit dolor quam cumque recusandae
          sunt, fuga nulla eligendi, rem facilis molestiae nesciunt porro at
          veniam voluptas unde dolores eos dignissimos quas molestias maxime.
          Modi nisi, placeat facere fugiat dolore quia deleniti error excepturi
          consectetur. Quis sunt animi laudantium pariatur, culpa tenetur
          voluptatibus?
        </p>
      </div>
    </div>
  )
}

export default About
