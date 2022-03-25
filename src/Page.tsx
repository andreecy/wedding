function Page(props: any) {
  return (
    <>
      <div className="container mx-auto mb-6">
        <div className="flex flex-row justify-center">
          <div className="basis-full lg:basis-1/3 p-10 min-h-[750px] bg rounded-2xl shadow-md">
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
