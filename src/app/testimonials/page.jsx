import Breadcrumb from '@/components/ui/Breadcrumb'
import Subscribe from '@/components/sections/Subscribe'
import TestimonialList from '@/components/ui/TestimonialList'

const Testimonial = () => {
  return (
    <>
      <div className="team_layout pt-10 pb-10 bg-bgGray">
        <div className="container">
          <h1 className='heading'>Testimonial List</h1>
          <div className="navigation">
            <Breadcrumb />
          </div>
        </div>
      </div>

      <TestimonialList />
      <Subscribe />
    </>
  )
}

export default Testimonial