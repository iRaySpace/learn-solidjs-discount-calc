import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';

const App: Component = () => {
  const [getOriginal, setOriginal] = createSignal(0);
  const [getRateOff, setRateOff] = createSignal(0);

  let discountedRef;

  createEffect(() => {
    const discountedRate = getOriginal() * (getRateOff() / 100.00);
    const discountedFixed = (discountedRate ? discountedRate : 0).toFixed(2);
    discountedRef.innerHTML = discountedFixed;
  });

  return (
    <div class="container mx-auto pt-11">
      <h1 class="text-4xl text-slate-500 text-center py-20">
        SolidJS калькулятор скидок
      </h1>
      <main class="max-w-lg mx-auto rounded-xl shadow-xl ring-1 ring-slate-900/5 p-5 flex">
        <div id="rate-input">
          <div>
            <label class="block text-slate-700 mb-2">Стоимость</label>
            <input
              type="number"
              class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-2 ring-1 ring-slate-200 shadow-sm"
              placeholder="Input original rate (e.g. 100.00)"
              onInput={(e) => setOriginal(parseFloat(e.currentTarget.value))}
            />
          </div>
          <div class="mt-5">
            <label class="block text-slate-700 mb-2">Процент скидки (%)</label>
            <input
              type="number"
              class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-2 ring-1 ring-slate-200 shadow-sm"
              placeholder="Input % off (e.g. 10.00)"
              onInput={(e) => setRateOff(parseFloat(e.currentTarget.value))}
            />
          </div>
        </div>
        <div class="w-full flex flex-col">
          <p class="text-slate-700 text-center">Цена со скидкой</p>
          <div class="grow flex justify-center items-center">
            <span class="text-xl" ref={discountedRef}></span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
