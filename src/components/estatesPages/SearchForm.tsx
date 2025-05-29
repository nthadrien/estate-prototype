
import { type JSX, For } from 'solid-js';
import { useTranslations } from 'src/i18n/utils.ts';
import PriceRangeSlider from '@components/reactiveInputs/priceRangeSlider';
import { useStore } from '@nanostores/solid';
import { $locale } from 'src/stores/user.ts';
import countries from "src/api/countries.json"

const SearchForm = ():JSX.Element => {

    const locale = useStore($locale);
    const t = useTranslations(locale());

    const changeCountry = () => {}
    const filterTowns = () => []

    return (<section style="top:-2.8rem;" class="container-sm rounded position-relative bg-body shadow p-2 p-lg-3" id="accordionPanelsStayOpenExample">

        <aside class="d-flex justify-content-between mb-2">

            <div class="text-start">
                <button title="grid" class="btn btn-sm">
                    <i class="fa fa-th-large" />
                </button>
                <button title="list" class="btn btn-sm">
                    <i class="fa fa-list-ul"  />
                </button>
            </div>

            <div class="text-end border">
                <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    {t("more.opts")}
                </button>
            </div>
        </aside>

        <aside class="collapse col-12 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 justify-content-center align-items-center" id="collapseExample">

        <div class='col'>
                <label class="input-group border rounded">
                    <i class="input-group-text bg-body border-0 text-secondary fa fa-globe fs-4"></i>
                    <div class="form-floating">
                        <select onChange={changeCountry} name="country" class="form-control border-0" required>
                        <option disabled></option>
                        <For each={countries}>
                            { item => <option value={item.name}>{item.name}</option>}
                        </For>
                        </select>
                        <span class="label">{t("country")}</span>
                    </div>
                </label>
            </div>

            <div class="col">
                <label class="input-group border rounded">
                    <i class="input-group-text bg-body border-0 text-secondary fa fa-map-marker fs-4"></i>
                    <div class="form-floating">
                    <select name="city" class="form-control border-0" required>
                        <For each={filterTowns()}>
                        { item => <option value={item}>{item}</option>}
                        </For>
                    </select>
                    <span class="label">{t("city")}</span>
                    </div>
                </label>
            </div>


            <div class='col'>
                <label class="input-group border rounded">
                    <i class="input-group-text bg-body border-0 text-secondary fa fa-clone fs-4"></i>
                    <div class="form-floating">
                    <input type="text" class="form-control border-0" name="type" placeholder="type of estate" />
                    <span class="label">Type</span>
                    </div>
                </label>
            </div>

            <div class='col'>
                <label class="input-group border rounded">
                    <i class="input-group-text bg-body border-0 text-secondary fa fa-user fs-4"></i>
                    <div class="form-floating">
                    <select class="form-control border-0" name="guests">
                        <For each={["1","2","3", t("more")]}>
                        { item => <option value={item}>{item} {t("guest")}</option>}
                        </For>
                    </select>
                    <span class="label">Number of Guests</span>
                    </div>
                </label>
            </div>

            <div class="col">    
                <label class="input-group border rounded">
                    <i class="input-group-text bg-body border-0 text-secondary fa fa-clone fs-4"></i>
                    <div class="form-floating">
                    <input type="text" class="form-control border-0" name="type" placeholder="type of estate" />
                    <span class="label">Type</span>
                    </div>
                </label>
            </div>


            <div class="col">

                <label class="input-group border rounded">
                    <i class="input-group-text bg-body border-0 text-secondary fa fa-user fs-4"></i>
                    <div class="form-floating">
                    <select class="form-control border-0" name="guests">
                        <For each={["1","2","3", t("more")]}>
                        { item => <option value={item}>{item} {t("guest")}</option>}
                        </For>
                    </select>
                    <span class="label">Number of Guests</span>
                    </div>
                </label>

            </div>

            <div class="col">
                <label class="input-group border rounded">
                    <i class="input-group-text bg-body border-0 text-secondary fa fa-clone fs-4"></i>
                    <div class="form-floating">
                    <input type="text" class="form-control border-0" name="type" placeholder="type of estate" />
                    <span class="label">Type</span>
                    </div>
                </label>
            </div>

            <div class="col">
                <label class="input-group border rounded">
                    <i class="input-group-text bg-body border-0 text-secondary fa fa-user fs-4"></i>
                    <div class="form-floating">
                    <input type="number" class="form-control border-0" name="numOfGuest" placeholder=" " />
                    <span class="label">{t("key.numOfGuest")}</span>
                    </div>
                </label>
            </div>

            <div class="col">
                <label class="input-group border rounded">
                    <i class="input-group-text bg-body border-0 text-secondary fa fa-bath fs-4"></i>
                    <div class="form-floating">
                    <input type="number" class="form-control border-0" name="numOfBaths" value={1} placeholder=" " />
                    <span class="label">{t("key.numOfBaths")}</span>
                    </div>
                </label>
            </div>

            <div class="col">
                <label class="input-group border rounded">
                    <i class="input-group-text bg-body border-0 text-secondary fa fa-bed fs-4"></i>
                    <div class="form-floating">
                    <input type="number" class="form-control border-0" name="numOfRooms" value={1} placeholder=" " />
                    <span class="label">{t("key.numOfRooms")}</span>
                    </div>
                </label>
            </div>

            <div class="col nav gap-2">

                <label>
                    <input type="checkbox" class="form-check-input me-1" name="pricePerHour" value="true" /> {t("key.pricePerHour")} 
                </label>

                <label>
                    <input type="checkbox" class="form-check-input me-1" name="pricePerDay" value="true" /> {t("key.pricePerDay")} 
                </label>

                <label>
                    <input type="checkbox" class="form-check-input me-1" name="pricePerMonth" value="true" /> {t("key.pricePerMonth")} 
                </label>

                <div></div>

            </div>

            <div class="col">
                <span class="label">Price Range</span>
                <PriceRangeSlider />
            </div>

            <div class="">
                <button class="btn border-bottom text-start w-100" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Accordion Item #1
                </button>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                    <For each={[1,2,3,4]}>
                        { (item) => 
                            <label class="form-check-label d-block p-2">
                                <input class="form-check-input me-3" type="checkbox" value="" id="checkDefault"></input>
                                Default checkbox
                            </label>
                        }
                    </For>  
                </div>
            </div>

        </aside>

    </section>);
}

export default SearchForm
