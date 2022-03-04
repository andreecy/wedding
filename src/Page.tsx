function Page(props: any) {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row justify-center">
          <div className="basis-full lg:basis-1/3 p-4 bg h-[750px] border-solid border-2 border-gray-600">
            {props.children}
          </div>
        </div>
      </div>

    </>
  );
}

export default Page;
