import HomeSectionOne from '../../components/section/homeSectionOne';
import HomeSectionTwo from '../../components/section/homeSectionTwo';
import floatImage from '../../components/float/floatimage';


let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
            ${floatImage}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;