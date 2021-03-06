

const HeaderItem = ({title, Icon, handleHome}) => {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white" onClick={handleHome}>
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
