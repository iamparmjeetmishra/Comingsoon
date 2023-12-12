


const AboutCard = (imgUrl, title, desc) => {
  return (
    <div className="about-box dark:bg-transparent" >
      <img alt="icon" src={imgUrl} width="40" height="40" decoding="async" data-nimg="1" className="w-10 h-10 object-contain block" loading="lazy" />
      <div className="space-y-2 break-all">
        <h3 className="dark:text-white text-xl font-semibold">{ title }</h3>
        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">{ desc } </p>
      </div>
    </div>
  )
}

export default AboutCard