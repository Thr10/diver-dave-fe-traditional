import MainLeftContent from '../MainLeftContentRender';
import VerticalNav from '../VerticalNav';

export default function MainContent() {
  return (
    <main className="-mt-24 pb-8 flex-1 h-0">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 h-full">
        <h1 className="sr-only">Page title</h1>
        {/* Main 3 column grid */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8 h-full">
          {/* Left column */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-2 h-full overflow-y-scroll no-scrollbar rounded-lg">
            <section aria-labelledby="section-1-title">
              <h2 className="sr-only" id="section-1-title">
                Section title
              </h2>
              <div className="overflow-hidden  bg-white shadow h-full">
                <div className="p-6">
                  {/* 由路由控制的页面内容全在这个组件里 */}
                  <MainLeftContent />
                </div>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="hidden lg:grid grid-cols-1 gap-4">
            <section aria-labelledby="section-2-title">
              <h2 className="sr-only" id="section-2-title">
                Section title
              </h2>
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="p-6">
                  <VerticalNav />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
