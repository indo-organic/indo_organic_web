import staticsbg from '../carouselImg/stat.png'
// import staticsbg from '../carouselImg/stat.png'

const Static = () => {
  return (
    <>
      <section className="flex flex-col w-[90%] h-[30vh] bg-cover bg-fixed bg-center justify-center items-center m-auto"
        style={{ backgroundImage: `url(${staticsbg})` }}
      >

        <div className="text-center font-[600] text-white text-[2.3rem]">
          We leverage our rich heritage to tackle the challenges of the future
        </div>

      </section>

    </>
  )
}

export default Static
