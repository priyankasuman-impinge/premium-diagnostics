(self.webpackChunktipoBooking=self.webpackChunktipoBooking||[]).push([[321],{321:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var i=t(225);const{Liquid:a}=t(620),l=new a;l.registerFilter("getIndex",(function(n,e){for(var t=0,i=0;i<e.length;i++)JSON.stringify(n)===JSON.stringify(e[i])&&(t=i);return t})),l.registerFilter("format_money",(function(n,e){return(0,i.lb)(n,e)})),l.registerFilter("multipleWith",(function(n,e){return n*e})),l.templates={confirm:'\n<div class="confirm">\n<div class="product-info">\n    <div class="thumb"><img src="{{featured_image}}"/></div>\n    <div class="title">{{product_title}}</div>\n</div>\n<div class="booking-info">\n    {% if settings.general.multipleEmployees == \'1\' and tpbService.available_time_basis != \'product\' %}\n    <div class="employee">\n        <label>\n            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">\n                <g id="Group_141" data-name="Group 141" transform="translate(-236.8 -236.8)">\n                    <path id="Path_1029" data-name="Path 1029"\n                          d="M236.8,243.8a7,7,0,1,0,7-7A7.009,7.009,0,0,0,236.8,243.8Zm2.926,4.795a19.261,19.261,0,0,1,2.182-1.275.457.457,0,0,0,.258-.413v-.879a.351.351,0,0,0-.049-.178,2.993,2.993,0,0,1-.364-1.074.348.348,0,0,0-.253-.284,1.907,1.907,0,0,1-.255-.626,1.58,1.58,0,0,1-.089-.583.352.352,0,0,0,.33-.468,2,2,0,0,1-.049-1.2,2.324,2.324,0,0,1,.626-1.091,3,3,0,0,1,.591-.488l.012-.009a2.207,2.207,0,0,1,.554-.284h0a1.763,1.763,0,0,1,.5-.092,2.063,2.063,0,0,1,1.263.267,1.508,1.508,0,0,1,.571.517.354.354,0,0,0,.287.189.534.534,0,0,1,.3.213c.167.221.4.795.115,2.182a.35.35,0,0,0,.187.385,1.426,1.426,0,0,1-.084.608,2.192,2.192,0,0,1-.227.583.37.37,0,0,0-.183.023.355.355,0,0,0-.21.261,3.233,3.233,0,0,1-.267.862.354.354,0,0,0-.034.152v1.016a.454.454,0,0,0,.258.414,19.3,19.3,0,0,1,2.182,1.275,6.274,6.274,0,0,1-8.151-.006ZM243.8,237.5a6.293,6.293,0,0,1,4.6,10.6,20.091,20.091,0,0,0-2.257-1.341v-.786a3.679,3.679,0,0,0,.23-.681c.281-.106.479-.433.666-1.091.169-.6.155-1.022-.046-1.263a3.241,3.241,0,0,0-.284-2.527,1.224,1.224,0,0,0-.615-.448,2.252,2.252,0,0,0-.752-.654,2.748,2.748,0,0,0-1.66-.359,2.472,2.472,0,0,0-.677.129h0a2.923,2.923,0,0,0-.721.367,3.931,3.931,0,0,0-.718.592,2.976,2.976,0,0,0-.8,1.407,2.68,2.68,0,0,0-.031,1.252.526.526,0,0,0-.106.1c-.207.25-.224.649-.052,1.261a1.96,1.96,0,0,0,.522,1.013,3.692,3.692,0,0,0,.371,1.051v.637a20.276,20.276,0,0,0-2.257,1.341,6.291,6.291,0,0,1,4.594-10.6Z"\n                          fill="#6370a7"/>\n                </g>\n            </svg>\n            {{tpbText.employee}}\n        </label>\n        <div class="value">{{employee}}</div>\n    </div>\n    {% endif %}\n    <div class="date">\n        <label>\n            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">\n                <path id="Union_1" data-name="Union 1"\n                      d="M-4292.616-1014H-4306v-14h14v14Zm0-.616v-9.108h-12.768v9.108Zm0-9.723v-3.047h-12.768v3.047Zm-3.466,7.86v-2.252h2.253v2.252Zm.616-.615h1.02v-1.021h-1.02Zm-4.66.615v-2.252h2.252v2.252Zm.616-.615h1.021v-1.021h-1.021Zm-4.661.615v-2.252h2.253v2.252Zm.616-.615h1.02v-1.021h-1.02Zm7.474-2.733v-2.252h2.252v2.252Zm.615-.615h1.02v-1.021h-1.02Zm-4.66.615v-2.252h2.252v2.252Zm.616-.615h1.02v-1.021h-1.02Zm-4.661.615v-2.252h2.253v2.252Zm.616-.615h1.02v-1.021h-1.02Z"\n                      transform="translate(4306 1028)" fill="#6370a7"/>\n            </svg>\n            {{tpbText.datetime}}\n        </label>\n        <div class="value">{{datetime}}</div>\n    </div>\n    <div class="time">\n        <label>\n            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">\n                <g id="Group_150" data-name="Group 150" transform="translate(-179.48 -179.48)">\n                    <g id="Group_147" data-name="Group 147">\n                        <g id="Group_146" data-name="Group 146">\n                            <path id="Path_1033" data-name="Path 1033"\n                                  d="M186.48,179.48a7,7,0,1,0,7,7A7,7,0,0,0,186.48,179.48Zm.3,13.384v-1.231a.3.3,0,1,0-.6,0v1.231a6.4,6.4,0,0,1-6.084-6.084h1.231a.3.3,0,0,0,0-.6H180.1a6.4,6.4,0,0,1,6.084-6.084v1.231a.3.3,0,0,0,.6,0V180.1a6.4,6.4,0,0,1,6.084,6.084h-1.231a.3.3,0,1,0,0,.6h1.234A6.4,6.4,0,0,1,186.78,192.864Z"\n                                  fill="#6370a7"/>\n                        </g>\n                    </g>\n                    <g id="Group_149" data-name="Group 149">\n                        <g id="Group_148" data-name="Group 148">\n                            <path id="Path_1034" data-name="Path 1034"\n                                  d="M189.648,189.273l-2.868-2.916v-3.03a.3.3,0,0,0-.6,0v3.153a.3.3,0,0,0,.087.21l2.952,3a.3.3,0,1,0,.429-.42Z"\n                                  fill="#6370a7"/>\n                        </g>\n                    </g>\n                </g>\n            </svg>\n            {{tpbText.duration}}\n        </label>\n        <div class="value">{{duration}} {{tpbText.duration_unit}}</div>\n    </div>\n    {% if settings.general.multipleLocations == \'1\' %}\n    <div class="location">\n        <label>\n            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">\n                <g id="Group_153" data-name="Group 153" transform="translate(-358.104 -220.4)">\n                    <g id="Group_143" data-name="Group 143">\n                        <path id="Path_1030" data-name="Path 1030"\n                              d="M364.1,223.19a2.933,2.933,0,1,0,3.1,2.93A3.023,3.023,0,0,0,364.1,223.19Zm0,5.155a2.229,2.229,0,1,1,2.36-2.225A2.3,2.3,0,0,1,364.1,228.345Z"\n                              fill="#6370a7"/>\n                        <path id="Path_1031" data-name="Path 1031"\n                              d="M364.1,220.4c-.069,0-.142,0-.212,0a5.868,5.868,0,0,0-5.756,5.1,5.425,5.425,0,0,0,.079,1.612,1.617,1.617,0,0,0,.043.189,5.21,5.21,0,0,0,.4,1.112,15.808,15.808,0,0,0,4.9,5.8.9.9,0,0,0,1.1,0,15.828,15.828,0,0,0,4.9-5.786,5.338,5.338,0,0,0,.4-1.12c.018-.068.03-.126.04-.18a5.369,5.369,0,0,0,.109-1.074A5.851,5.851,0,0,0,364.1,220.4Zm5.157,6.608c0,.005-.009.054-.03.143a4.96,4.96,0,0,1-.358.994,15.113,15.113,0,0,1-4.69,5.528.125.125,0,0,1-.076.025.135.135,0,0,1-.076-.025,15.146,15.146,0,0,1-4.7-5.54,4.73,4.73,0,0,1-.355-.985c-.019-.075-.028-.12-.031-.135l0-.017a4.784,4.784,0,0,1-.07-1.423,5.277,5.277,0,0,1,10.482.484A4.844,4.844,0,0,1,369.256,227.008Z"\n                              fill="#6370a7"/>\n                    </g>\n                </g>\n            </svg>\n            {{tpbText.location}}\n        </label>\n        <div class="value">{{location}}</div>\n    </div>\n    {% endif %}\n</div>\n<div class="extra-fields">\n\n    {% if tpbService.is_free != 0 %}\n\n    {% if settings.free_form.first_name.enable %}\n      <div class="element">\n          <label class="" for="first_name">{{ settings.free_form.first_name.label }} {% if settings.free_form.first_name.required == true %}<span\n              class="required-mark">*</span>{% endif %}</label>\n\n          <input id="first_name" type="text" class="{% if settings.free_form.first_name.required == true %}required{% endif %}" name="first_name" data-label="{{ settings.free_form.first_name.label }}" placeholder="{{ settings.free_form.first_name.placeholder }}" value="{{ customer.first_name }}" />\n          <p class="error-message" style="display: none; color: red">{{tpbText.is_required}}</p>\n      </div>\n    {% endif %}\n    {% if settings.free_form.last_name.enable %}\n      <div class="element">\n          <label class="" for="last_name">{{ settings.free_form.last_name.label }} {% if settings.free_form.last_name.required == true %}<span\n              class="required-mark">*</span>{% endif %}</label>\n\n          <input id="last_name" type="text" class="{% if settings.free_form.last_name.required == true %}required{% endif %}" name="last_name" data-label="{{ settings.free_form.last_name.label }}" placeholder="{{ settings.free_form.last_name.placeholder }}"  value="{{ customer.last_name }}"/>\n          <p class="error-message" style="display: none; color: red">{{tpbText.is_required}}</p>\n      </div>\n    {% endif %}\n    {% if settings.free_form.email.enable %}\n        <div class="element">\n            <label class="" for="email">{{ settings.free_form.email.label }} {% if settings.free_form.email.required == true %}<span\n                class="required-mark">*</span>{% endif %}</label>\n\n            <input id="email" type="text" class="{% if settings.free_form.email.required == true %}required{% endif %}" name="email" data-label="{{ settings.free_form.email.label }}" placeholder="{{ settings.free_form.email.placeholder }}"  value="{{ customer.email }}"/>\n            <p class="error-message" style="display: none; color: red">{{tpbText.is_required}}</p>\n            <p class="error-message_validate" style="display: none; color: red">{{tpbText.valid_email}}</p>\n        </div>\n    {% endif %}\n    {% if settings.free_form.phone_number.enable %}\n    <div class="element">\n        <label class="" for="phone_number">{{ settings.free_form.phone_number.label }} {% if settings.free_form.phone_number.required == true %}<span\n            class="required-mark">*</span>{% endif %}</label>\n\n        <input id="phone_number" type="text" class="{% if settings.free_form.phone_number.required == true %}required{% endif %}" name="phone_number" data-label="{{ settings.free_form.phone_number.label }}" placeholder="{{ settings.free_form.phone_number.placeholder }}"  value="{{ customer.phone }}"/>\n        <p class="error-message" style="display: none; color: red">{{tpbText.is_required}}</p>\n        <p class="error-message_validate" style="display: none; color: red">{{tpbText.valid_phone_number}}</p>\n    </div>\n    {% endif %}\n\n    {% endif %}\n\n    {% for field in extraFieldSets %}\n    {% assign required = \'\' %}\n    {% if field.required==true %}\n    {% assign required = \'required\' %}\n    {% endif %}\n    {% assign index = field | getIndex : extraFieldSets %}\n    <div class="element">\n        <label class="" for="{{ field.label }}">{{ field.label }} {% if field.required==true %}<span\n            class="required-mark">*</span>{% endif %}</label>\n        {% if field.type == "singleLineText" %}\n        <input id="{{ field.slug }}" type="text" class="{{ required }}" name="form[{{index}}]"\n               data-label="{{ field.label }}"/>\n        {% endif %}\n        {% if field.type == "multipleLineText" %}\n        <textarea id="{{ field.slug }}" class="{{ required }}" name="form[{{index}}]" rows="4"\n                  style="resize: vertical;" data-label="{{ field.label }}"></textarea>\n        {% endif %}\n        {% if field.type == "checkBox" %}\n        <div class="tpb-checkbox-group">\n            {% for option in field.options %}\n            {% assign indexOption = option | getIndex : field.options %}\n            <div class="tpb-checkbox">\n                <input type="checkbox" data-label="{{ field.label }}" id="form[{{index}}]_{{indexOption}}"\n                       name="form[{{index}}][]" class="inp-box {{ required }}" value="{{option}}"\n                       style="display:none">\n                <label for="form[{{index}}]_{{indexOption}}" class="ctx">\n                              <span>\n                                <svg width="12px" height="10px">\n                                  <use xlink:href="#check">\n                                    <symbol id="check" viewBox="0 0 12 10">\n                                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>\n                                    </symbol>\n                                  </use>\n                                </svg>\n                              </span>\n                    <span>{{option}}</span>\n                </label>\n            </div>\n            {% endfor %}\n        </div>\n        {% endif %}\n        {% if field.type == "dropDown" %}\n        <select class="tpb-form-control-select {{ required }}" name="form[{{index}}]"\n                data-label="{{ field.label }}" placeholder="Choose...">\n            <option data-placeholder=true></option>\n            {% for option in field.options %}\n            <option value="{{ option }}">{{ option }}</option>\n            {% endfor %}\n        </select>\n        {% endif %}\n        {% if field.type == "multipleSelect" %}\n        <select class="tpb-form-control-select tpb-form-control-multiple-select {{ required }}" name="form[{{index}}]"\n                data-label="{{ field.label }}" placeholder="Choose..." multiple>\n            <option data-placeholder=true></option>\n            {% for option in field.options %}\n            <option value="{{ option }}">{{ option }}</option>\n            {% endfor %}\n        </select>\n        {% endif %}\n        {% if field.type == "radiobutton" %}\n        <div class="tpb-radio-group">\n            {% for option in field.options %}\n            <div class="tpb-radio-group_item">\n                <input type="radio" value="{{ option }}" class="{{ required }}" id="form[{{index}}][{{option}}]"\n                       name="form[{{index}}]" data-label="{{ field.label }}"/>\n                <label for="form[{{index}}][{{option}}]">{{option}}</label>\n            </div>\n            {% endfor %}\n        </div>\n        {% endif %}\n        {% if field.type == "datePicker" %}\n        <div class="tpb-input-date-picker">\n            <input id="{{ field.slug }}" type=text readonly class="{{ required }}" name="form[{{index}}]-{{ field.slug }}"\n                   data-label="{{ field.label }}"/>\n        </div>\n    {% endif %}\n        <p class="error-message" style="display: none; color: red">{{tpbText.is_required}}</p>\n    </div>\n\n    {% endfor %}\n</div>\n<div class="subtotal">\n    <div class="g-row bring">\n        <div class="label">{{tpbText.quantity}}</div>\n        <div class="value">{{qty}}</div>\n    </div>\n    {% if tpbService.is_free == 0 %}\n    <div class="g-row price ">\n        <div class="label" data-price="{{product_price}}">{{tpbText.total_price}}</div>\n        {% assign total = product_price | multipleWith : qty %}\n        <div class="value" data-qty="{{qty}}" data-total="{{total}}">{{ total | format_money : window.moneyFormat }}\n        </div>\n    </div>\n    {% endif %}\n</div>\n<div class="action fullwidth">\n    <button type="button" class="back-button">{{tpbText.back}}</button>\n    <button type="submit" class="confirm-button">{{tpbText.confirm}}</button>\n</div>\n</div>\n<div class="confirmBookingFree">\n<div class="success_message_when_free_booking no-print">\n\n</div>\n<div class="infoBooking">\n\n</div>\n<div class="confirmBookingFree_action no-print">\n    <div id="tpb-ical" class="confirmBookingFree_action-item">\n        <a id="tpb-ical_link" href="#">\n            <div>\n                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n                <image id="image0" width="100" height="100" x="0" y="0"\n                       xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n                       AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA51BMVEUAAAD/3Kn/3Kn/3Kn/\n                       3Kn/3Kn/3Kn/3Kn/3Kn/3Kn/3Kn/3Kn/3Kn/3Kn/3Kn/3KnMtZYxQFtxcXOlmIeLhH1+e3hlZ2/Y\n                       v5qYjoL/n3v/cFiYWFplTFrMZFn/poH/i2z/gFSYc1NlYVX/lU+YeFJlXFb/kFD/oEzMlE3/e1X/\n                        qkq/m0txalT/xUP/ukali05+clL/wET/dVdYWVfYrEjyvUXMpEn/hVP/m07/9ur////z9Pf/7er/\n                        uKz/ycDm6e7/29X/lIL5+vv/9vX/5ODs7/Lx8/X6+/z/r6H9/v7/+O//8t//3q5AOYpyAAAAD3RS\n                        TlMAQHCPv88QUGCvn9/vIDAt5qPNAAAAAWJLR0Q6TgnE+gAAAAd0SU1FB+QJBwYCOM9/D1IAAANb\n                        SURBVGje7ZrZVtswEIbjeM2GUGlTCBTSlqVQBE2akCbdAiWkFN7/eWpL8ZJYY8uyrCv+q5njY31n\n                        NCNLllSrCcqom5aNItmWWTcc0ZcF5LhmovmkbNNVAnK8BspUwyvLMZpIQE2jBMKzRRC03zxZREsU\n                        EaglgzGsIohAVtFOc4RykcpNoRJw2zIMhNqueBimHCKQKRhMR7imeLI7Iowtya6Kumwrn+GVQwTK\n                        LWYFjFyKEkYORREjk6KMkUHZUsdACKixTsnaXVebO16cUmMwLZs39kt8S/gy0wxXNQOh1NfS4SZk\n                        G7+KnR38Onbe4J3Y6eK3vLfbmx3Gnz92cRdwung3djDeFukwA1UBQetzpVUNxMoc6ns9qn180Iu0\n                        5hzg/djB+B0z9jbbSQ78zXXJYU8O0jvcaKiVEciRLOQIDsUGIP33+MPHsKX+MT45DZ3TE3zcD50z\n                        jD+dAxAbLq0V5OIzviRhW1fX+MtgyOwhucTXVyGdfMWjCwASFVgTghAyGpMwFEJuxmTC7AkZ3xCy\n                        evCNjEdkAEGaq8GOwEiIryiSwFlFch7YcSS+wEiQA01VYU78hs+inAzIIM4JIYM4Jz6wD0JY6hsg\n                        xG95GNdQb5JwhpPEg2HE40AaQG/FkKLiQGh/uVVDXGCyms4kNeU0ZvJGomqIzU+JWggCZhK1EKNW\n                        rx5S5y9S8iDfmaj94yfVLxhi8ufEPMhvJmrPWfHewhCLW1yKIXYNVQ9BLxANkDsmav+ZU90rh4B6\n                        gVQMWbAaYvlNFtRsNQ9SW6S67OohdtYHUhXEyvrUq4KYWZOWKkg9a/pVBfHX3DDkYUG1ZEQmBrll\n                        ovY9s//CEE1LIj2LO7dqiAssuJVCHODXoUjil+zBAwRpQD9BRUr4jj1YQBAP+p1TCXGgH1OFkCb4\n                        i60QYoCbBeog0WZBOvXqIIkdnBYXsmQLn0fWVmIVNGOroDm1H9mDJReS2MBJhaJsMK7tQVvVQNY2\n                        1TYLTBryDygt3q7wkyzkiTtG+Fu2z5KhTJ+TraS2bLVsPuvZRtdzIKDlaEPPIY2e4yY9B2d6jgD1\n                        HGbqOZbVc8Cs56hcz6F/Tcv1BelgCoTBpOFKSSANl2MopvprPrTTqr+wFEjD1SvGqfwSWdRxnOtw\n                        ou/+BxgpeKEJ8EpdAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA2OjAyOjU2KzAyOjAw\n                        Cg//bwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNjowMjo1NiswMjowMHtSR9MAAAAZ\n                        dEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC"\n                />\n            </svg>\n            <span>\n                iCal\n            </span>\n            </div>\n        </a>\n    </div>\n    <div id="tpb-gcal" class="confirmBookingFree_action-item">\n        <a id="tpb-gcal_link" href="#">\n            <div>\n                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n                    <image id="image0" width="100" height="100" x="0" y="0"\n                           xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n                            AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABWVBMVEUAAACfxv+fxv+fxv+f\n                            xv+fxv+fxv+fxv+fxv+fxv+fxv+fxv+fxv+fxv+fxv+fxv+92P/t9P/////i6fLa5fS00fvD2//F\n                            2virzf+wz/zV5v/J3Pfn8f/R4PXP4//h7f/C2fav0PnI3fXz+P/P4PR7t//V4/TJ3/+31P/5+//c\n                            5vOVxPyozfmEsfd0n+pmleZfj+Jsmudiluwzcd19q/RBfOGYwf2Zwv9HgeNOhuZ3pvKLtvlfkOSt\n                            xvDO3fbk7Pmivu+Ap+nZ5PdUiOI+ed+4zfJJgOGXtu06dt/D1fRpnO6Mr+tql+Z1n+iSu/tLguFh\n                            keRVjOhBgOY0duR5pOzr8ftilem90vU3hvddnfna6P7N4f2Muv5ppPmbw/u00vyCs/pyqvxenvpL\n                            kvlQlfjm8P6oyvyFtv3z9/9EjvhrpvuPu/tYmvrB2f12rPp/sv1Rlvk+ivhlovusdYrDAAAAD3RS\n                            TlMAQHCPv88QUGCvn9/vIDAt5qPNAAAAAWJLR0QSe7xsAAAAAAd0SU1FB+QJBwcDKMoRREAAAAQ1\n                            SURBVGjevZppX9pAEIeBkHDqVuhde1npTQ+jUq2CUqhK1VZ7QSt4IBWobdXv/6IJR37Z7ExIlrD/\n                            N0jcnYedmc2ePp9D+QNSUCaG5KAU8CtOKzuQEpJM5s2SpZAnICUcIbaKhIfl+KPEgaL+IRBh2Qmi\n                            47cwLyLmFKErxoPxB90gdAXdOk1xFAsmNq5SIBTnYRASDzlvhsSH0CU5bMyY45yCJI85YYxzuspw\n                            2fhgRng4hK6ByewBYyDFE8YAikcMW4pnDBvKuHcMQpAcGxsyd2nFwf6iDNUHWclQ3x/iXQJLYhkh\n                            rxmEMG9LBQjIpYkEpCSky1fY+nGrw4Dx42oi4RySTF4b6DA/W+J6wh0keYO1QY+VwFh70y3kFmsj\n                            OKirT7qF3AaMmDt+bFSQ2IB3Vg8yeeeuPeTe/SkcYmqKjEMeaH9N2EGmU6nUQxwi26SWAZlgHUdD\n                            pjTINA4xEixqA0k8Io+f2EGePks9t3EXifY6O7GDDBd4TYrdUOUVpBv6yGghERtvpV+8RPQK0es0\n                            7i/4HT+jcmgGNBXCBqtZHoaqzkK2JKwnzvFB5iBbMhYSPoaqgsaQ7j7PC8lA1vy+wOhbEkAmKW/4\n                            GAugMckHrz+5MhjL4SCcXGSRD7IIGpN94GPylqm/tJzNZVeWTE9W89l3lkJvYWsIxBr5QjHX1Ur/\n                            yXv9yRpdap24gyzQ1TdyOZqymte/FJ3EHYeUqNofdIsbax3UZr8ZLKTkEkK/vLKawS399+ss7XM5\n                            B0JmXUK2qdr5vpv0FvQ+1ljItksIWTfX3tpYLhh++6iqn4rFJZWBzBG3kB2wI+g/v9D7m4HsuIaU\n                            IEZB81texSAl15A0gNjMmnsKA0mjEGylaHnbF7K9hMoXUMg8Ykr2oRt0u5/N+vK1p2/GI+3Ld3OR\n                            XcxSEF+PlilV+hOiH8Yj7ctPqgxmSUIGLUL2aEi5WqvV9nXKAQrZQ0wFkNk2IYdlQAfmpjCQQ8SU\n                            NudG/nMEQcp6W1DIEZZcPiy96ubqx7Wek2qa5QoGqWPJhe5EUNUb/VD8smsJEnkJnaaeULU1e82W\n                            nmPNRKKBQ05AUyF0wt1mQtH8Xa1pjEQNh7RBUwq6dDilah83jYVDo4VDTiFLEXwR1KKrV/qURqVs\n                            gvyhS7UgS2F0OZex5u5xpyM2901wLQn+WkpBs1QFXZielFlVq1XLg4q1yD/WUhRfYrfLXAIi78c3\n                            C874IGeMIWOzAAj9OR/kHAk7vIHDx2D7vGkDh2lKxisItQdtHR89che1qcYk2AUf5AJLLXBXOFPn\n                            YdQtnTFKM5gt20zbtcfO2xYGs2UrZPNZzDa6mAMBIUcbYg5pxBw3iTk4E3MEKOYwU8yxrJgDZjFH\n                            5WIO/X1Cri9wN8ZFM7oScKVEl4DLMR3M6K/5dJw2+gtLugRcvepyRn6JzHAccB3Oad3/2qXB6x3i\n                            z/0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDktMDdUMDc6MDM6NDArMDM6MDAvnR8VAAAAJXRF\n                            WHRkYXRlOm1vZGlmeQAyMDIwLTA5LTA3VDA3OjAzOjQwKzAzOjAwXsCnqQAAABl0RVh0U29mdHdh\n                            cmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="\n                    />\n                </svg>\n                <span>\n                    gCal\n                </span>\n            </div>\n        </a>\n    </div>\n    <div id="tpb-print" class="confirmBookingFree_action-item">\n        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n            <image id="image0" width="100" height="100" x="0" y="0"\n                   xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n                    AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAsVBMVEUAAAD/2M//2M//2M//\n                    2M//2M//2M//2M//2M//2M//2M//2M//2M//2M//2M//2M//7Of/////xLz/eGb/5uL3t63wloz3\n                    ysX/vLP/3dngU0jwqaT/1c//kYP/7uz/qJv/kID7f2/3b1/7hHX/moz/opT/0sj/iXn/s6n/gHD/\n                    opb/9/X/zMb/q5/wZlf/4Nr/29X/fm3/7er/t6v/tKj/+/r/xrv3n5P/+vn/4t7/+/tIcjX/AAAA\n                    D3RSTlMAQHCPv88QUGCvn9/vIDAt5qPNAAAAAWJLR0QR4rU9ugAAAAd0SU1FB+QJBwYCHPN864MA\n                    AAL6SURBVGje7ZrZdtsgEIYtS0iyvBAqx7Eby26apI7tNFuzNe//YDVS6qOFgRECrvJf6EIH+A7D\n                    sM3Q6yHl9f2A0KNI4Pe9EFsZoTDyS82XRfzICCiMB1SqQdyV4yUUocTrgIgJBpHbLdZFDLEIrqEO\n                    xgvaILiCtkYLUWPRGJtWLhCNdBiUjiJ8N3w9BJeP7MwY7VMikTGGMdE01dFkEzUj7obgUjqzAYaS\n                    YoShoBhiSCnGGBLKxByDUsDHxh19t6qRcL6EneZgU0Q09zusJWL5TUZkmkFpY7UMZQNywkCdSKqN\n                    6gaT7h+akLrBPGoDQqt7ZWAHErSY6gDkWzpVQCoTHzyXnM64zsSQebpgZ3mBU6j+ENOR2Xeucxhy\n                    nheYIbpC7EEIwrU6Q44OltiEJJ+TnWpCltlKDaGh0n+lEC41pBj6gV3IQGUtE5DcXpFtSKTarExA\n                    fOlMNAQhiiExAqHgdF//yHXxk+vyCtRlXuCiKL0Wt+X1+sL/16mWroWN9YFx12Ok6S/xyAf2IQHg\n                    XKgWN/PN4XtVfG+2/BfgXhSC7BZlZQLIiu236Yax1YHB2C0IoTDkpuKqvwWQPWNZmjG2zwsvdSBp\n                    VvLUjchcu8X88J0vdmm6vV1mWhAdfUG+IM4hHZYVLIQYXiCFjQWGl3phYz6waRmF9IHt93+lO9we\n                    fyeFHM7c9iHQkcgkhECHOwFkVT+orJAQHzqmCiDT+iBPkZAIOnCbNFcIXR0MQgbgJUgEuX+o6B4J\n                    icHr3GMT8vSnpqcm5BGylvBi+tyEvDzU9NKEPDdbSiRX7Nd1rjdZRIKriEi8FaVfBQ156mBBIe0A\n                    TilYoAzV5pD3vzW9YyClCM4QAfmYVhnTDwSkFMDRDEUhIJUYtIugmpvwoPyirQtJqgw3IVsnwWc3\n                    YXQ3CQEnqQ03SRo36SY3iTM3KUA3yUw3aVk3CWY3qXI3Sf+ek+cL2p1p0Y1CDp6UcDl4HJNj7D/z\n                    yY1m/8ESl4OnVwXH+iOyo+EEz+Gwdf8BYpgPKHc/eRAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAt\n                    MDktMDdUMDY6MDI6MjgrMDI6MDBQ9Y0rAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA5LTA3VDA2\n                    OjAyOjI4KzAyOjAwIag1lwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAA\n                    SUVORK5CYII="\n            />\n        </svg>\n    </div>\n</div>\n</div>\n\n',history:'\n{% assign bookingHistory = \'Booking History\' %}\n{% if tpbText.bookingHistory %}\n    {% assign bookingHistory = tpbText.bookingHistory %}\n{% endif %}\n<div class="tpb-header"><p>{{bookingHistory}}</p></div>\n<div class="tpb-list-history">\n    <div class="tpb-sub-scroll">\n        <p>< - - - - - ></p>\n    </div>\n    <div class="tpb-table-scroll">\n        <table class="tpb-table">\n            <thead class="tpb-table_thead">\n            <tr>\n                {% if settings.general.multipleEmployees == \'1\' %}\n                <th class="tpb-column-scroll tpb-table_th-trainer" width="22%">{{tpbText.employee}}\n                </th>\n                {% endif %}\n                {% if settings.general.multipleLocations == \'1\' %}\n                <th class="tpb-table_th-location" width="20%">{{tpbText.location}}</th>\n                {% endif %}\n                <th class="tpb-table_th-services" width="20%">{{tpbText.product}}</th>\n                <th class="tpb-table_th-time" width="12%">{{tpbText.time}}</th>\n                <th class="tpb-table_th-payment" width="11%">{{tpbText.payment}}</th>\n                <th class="tpb-table_th-status" width="10%">{{tpbText.status}}</th>\n                <th class="tpb-table_th-view" width="5%"></th>\n            </tr>\n            </thead>\n            <tbody class="tpb-table_tbody">\n            {% for booking in bookings %}\n            <tr>\n                {% if settings.general.multipleEmployees == \'1\' %}\n                <td class="tpb-column-scroll">\n                    <div class="tpb-table_trainer">\n                        <div class="tpb-table_avatar">\n                            <img src={{ booking.employee.avatar }} alt="">\n                        </div>\n                        <div class="tpb-table_title">\n                            <span class="tpb-context-table">{{ booking.employee.first_name }} {{ booking.employee.last_name}}</span>\n                            <p class="tpb-table-sub">{{ booking.employee.email }}</p>\n                        </div>\n                    </div>\n                </td>\n                {% endif %}\n                {% if settings.general.multipleLocations == \'1\' %}\n                <td><span class="tpb-context-table">{{ booking.location.name }}</span></td>\n                {% endif %}\n                <td><span class="tpb-context-table">{{ booking.service.title }}</span></td>\n                <td>\n          <span class="tpb-context-table tpb-context-table_time">\n            <svg class="svg-icon" viewBox="0 0 20 20">\n              <path\n                  d="M10.25,2.375c-4.212,0-7.625,3.413-7.625,7.625s3.413,7.625,7.625,7.625s7.625-3.413,7.625-7.625S14.462,2.375,10.25,2.375M10.651,16.811v-0.403c0-0.221-0.181-0.401-0.401-0.401s-0.401,0.181-0.401,0.401v0.403c-3.443-0.201-6.208-2.966-6.409-6.409h0.404c0.22,0,0.401-0.181,0.401-0.401S4.063,9.599,3.843,9.599H3.439C3.64,6.155,6.405,3.391,9.849,3.19v0.403c0,0.22,0.181,0.401,0.401,0.401s0.401-0.181,0.401-0.401V3.19c3.443,0.201,6.208,2.965,6.409,6.409h-0.404c-0.22,0-0.4,0.181-0.4,0.401s0.181,0.401,0.4,0.401h0.404C16.859,13.845,14.095,16.609,10.651,16.811 M12.662,12.412c-0.156,0.156-0.409,0.159-0.568,0l-2.127-2.129C9.986,10.302,9.849,10.192,9.849,10V5.184c0-0.221,0.181-0.401,0.401-0.401s0.401,0.181,0.401,0.401v4.651l2.011,2.008C12.818,12.001,12.818,12.256,12.662,12.412"></path>\n            </svg>\n            {{ booking.time_start }}\n          </span>\n                    <div class=\'tooltip\'>\n                        {{ booking.range_date_time }}\n                    </div>\n                </td>\n                <td><p class="tpb-context-table">{{ booking.price | format_money : window.moneyFormat }}</p></td>\n                <td class="tpb-table_status"><span class="tpb-context-table tpb-context-table_status">{{ booking.status }}</span>\n                </td>\n                <td class="tpb-table_action">\n          <span class="tpb-context-table">\n              <div class="tpb-wrapper-btnView">\n                  <button class="tpb-btnView" data-index={{ forloop.index0 }}>\n                  <svg class="svg-icon" viewBox="0 0 20 20">\n                    <path\n                        d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>\n                  </svg>\n                </button>\n              </div>\n          </span>\n                </td>\n            </tr>\n            {% endfor %}\n            </tbody>\n        </table>\n    </div>\n    <div class="tpb-wrapper-btnExport">\n        <button class="tpb-btnExport" >\n            <div class="tpb-btnExport-title">\n                <svg class="svg-icon" height="453pt" viewBox="0 -28 453.99791 453" width="453pt" xmlns="http://www.w3.org/2000/svg">\n                    <path d="m345.375 3.410156c-2.863281-2.847656-7.160156-3.695312-10.890625-2.144531s-6.164063 5.195313-6.164063 9.234375v53.359375c-54.011718 2.148437-81.058593 24.539063-85.191406 28.261719-27.25 22.363281-45.855468 53.527344-52.613281 88.121094-3.378906 16.714843-3.984375 33.871093-1.785156 50.78125l.007812.058593c.019531.148438.042969.300781.066407.449219l2.125 12.214844c.714843 4.113281 3.914062 7.351562 8.019531 8.117187 4.109375.765625 8.257812-1.105469 10.40625-4.6875l6.367187-10.613281c19.5625-32.527344 43.941406-54.089844 72.46875-64.085938 12.867188-4.550781 26.5-6.546874 40.128906-5.882812v55.265625c0 4.046875 2.441407 7.699219 6.183594 9.242187 3.746094 1.546876 8.050782.679688 10.90625-2.191406l105.675782-106.210937c3.894531-3.914063 3.878906-10.246094-.035157-14.140625zm2.949219 194.214844v-40.027344c0-4.90625-3.5625-9.089844-8.410157-9.871094-8.554687-1.378906-31.371093-3.570312-58.335937 5.878907-28.765625 10.078125-53.652344 29.910156-74.148437 59.050781-.058594-9.574219.847656-19.132812 2.707031-28.527344 6.078125-30.730468 21.515625-56.542968 45.878906-76.710937.214844-.175781.417969-.359375.617187-.554688.699219-.648437 26.097657-23.578125 81.609376-23.164062h.074218c5.523438 0 10.003906-4.480469 10.007813-10.003907v-39.136718l81.535156 81.125zm0 0"/><path d="m417.351562 294.953125c-5.519531 0-10 4.476563-10 10v42.261719c-.015624 16.5625-13.4375 29.980468-30 30h-327.351562c-16.5625-.019532-29.980469-13.4375-30-30v-238.242188c.019531-16.5625 13.4375-29.980468 30-30h69.160156c5.523438 0 10-4.476562 10-10 0-5.523437-4.476562-10-10-10h-69.160156c-27.601562.03125-49.96875 22.398438-50 50v238.242188c.03125 27.601562 22.398438 49.96875 50 50h327.351562c27.601563-.03125 49.96875-22.398438 50-50v-42.261719c0-5.523437-4.476562-10-10-10zm0 0"/>\n                </svg>\n                <span class="tpb-btnExport-title_text">{% if tpbText.export_file_isc %}{{tpbText.export_file_isc}}{% else %}Export to file isc{% endif %}</span>\n            </div>\n\n        </button>\n    </div>\n</div>\n{% if settings.general.hideWaterMark == \'0\' %}\n<div class="copyright">\n    <a href="//apps.shopify.com/partners/tipo" rel="nofollow" attribute target="_blank">Made by <span\n        class="company">Tipo Appointment Booking</span></a>\n</div>\n{% endif %}\n',detailHistory:'\n<div class="confirm">\n    <div class="product-info">\n        <div class="thumb"><img src="{{featured_image}}"/></div>\n        <div class="title">{{product_title}}</div>\n    </div>\n    <div class="booking-info">\n        {% if settings.general.multipleEmployees == \'1\' %}\n        <div class="employee">\n            <label>\n                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">\n                    <g id="Group_141" data-name="Group 141" transform="translate(-236.8 -236.8)">\n                        <path id="Path_1029" data-name="Path 1029"\n                                d="M236.8,243.8a7,7,0,1,0,7-7A7.009,7.009,0,0,0,236.8,243.8Zm2.926,4.795a19.261,19.261,0,0,1,2.182-1.275.457.457,0,0,0,.258-.413v-.879a.351.351,0,0,0-.049-.178,2.993,2.993,0,0,1-.364-1.074.348.348,0,0,0-.253-.284,1.907,1.907,0,0,1-.255-.626,1.58,1.58,0,0,1-.089-.583.352.352,0,0,0,.33-.468,2,2,0,0,1-.049-1.2,2.324,2.324,0,0,1,.626-1.091,3,3,0,0,1,.591-.488l.012-.009a2.207,2.207,0,0,1,.554-.284h0a1.763,1.763,0,0,1,.5-.092,2.063,2.063,0,0,1,1.263.267,1.508,1.508,0,0,1,.571.517.354.354,0,0,0,.287.189.534.534,0,0,1,.3.213c.167.221.4.795.115,2.182a.35.35,0,0,0,.187.385,1.426,1.426,0,0,1-.084.608,2.192,2.192,0,0,1-.227.583.37.37,0,0,0-.183.023.355.355,0,0,0-.21.261,3.233,3.233,0,0,1-.267.862.354.354,0,0,0-.034.152v1.016a.454.454,0,0,0,.258.414,19.3,19.3,0,0,1,2.182,1.275,6.274,6.274,0,0,1-8.151-.006ZM243.8,237.5a6.293,6.293,0,0,1,4.6,10.6,20.091,20.091,0,0,0-2.257-1.341v-.786a3.679,3.679,0,0,0,.23-.681c.281-.106.479-.433.666-1.091.169-.6.155-1.022-.046-1.263a3.241,3.241,0,0,0-.284-2.527,1.224,1.224,0,0,0-.615-.448,2.252,2.252,0,0,0-.752-.654,2.748,2.748,0,0,0-1.66-.359,2.472,2.472,0,0,0-.677.129h0a2.923,2.923,0,0,0-.721.367,3.931,3.931,0,0,0-.718.592,2.976,2.976,0,0,0-.8,1.407,2.68,2.68,0,0,0-.031,1.252.526.526,0,0,0-.106.1c-.207.25-.224.649-.052,1.261a1.96,1.96,0,0,0,.522,1.013,3.692,3.692,0,0,0,.371,1.051v.637a20.276,20.276,0,0,0-2.257,1.341,6.291,6.291,0,0,1,4.594-10.6Z"\n                                fill="#6370a7"/>\n                    </g>\n                </svg>\n                {{tpbText.employee}}\n            </label>\n            <div class="value">{{employee}}</div>\n        </div>\n        {% endif %}\n        <div class="date">\n            <label>\n                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">\n                    <path id="Union_1" data-name="Union 1"\n                            d="M-4292.616-1014H-4306v-14h14v14Zm0-.616v-9.108h-12.768v9.108Zm0-9.723v-3.047h-12.768v3.047Zm-3.466,7.86v-2.252h2.253v2.252Zm.616-.615h1.02v-1.021h-1.02Zm-4.66.615v-2.252h2.252v2.252Zm.616-.615h1.021v-1.021h-1.021Zm-4.661.615v-2.252h2.253v2.252Zm.616-.615h1.02v-1.021h-1.02Zm7.474-2.733v-2.252h2.252v2.252Zm.615-.615h1.02v-1.021h-1.02Zm-4.66.615v-2.252h2.252v2.252Zm.616-.615h1.02v-1.021h-1.02Zm-4.661.615v-2.252h2.253v2.252Zm.616-.615h1.02v-1.021h-1.02Z"\n                            transform="translate(4306 1028)" fill="#6370a7"/>\n                </svg>\n                {{tpbText.date}}\n            </label>\n            <div class="value">{{date}}</div>\n        </div>\n        <div class="time">\n            <label>\n                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">\n                    <g id="Group_150" data-name="Group 150" transform="translate(-179.48 -179.48)">\n                        <g id="Group_147" data-name="Group 147">\n                            <g id="Group_146" data-name="Group 146">\n                                <path id="Path_1033" data-name="Path 1033"\n                                        d="M186.48,179.48a7,7,0,1,0,7,7A7,7,0,0,0,186.48,179.48Zm.3,13.384v-1.231a.3.3,0,1,0-.6,0v1.231a6.4,6.4,0,0,1-6.084-6.084h1.231a.3.3,0,0,0,0-.6H180.1a6.4,6.4,0,0,1,6.084-6.084v1.231a.3.3,0,0,0,.6,0V180.1a6.4,6.4,0,0,1,6.084,6.084h-1.231a.3.3,0,1,0,0,.6h1.234A6.4,6.4,0,0,1,186.78,192.864Z"\n                                        fill="#6370a7"/>\n                            </g>\n                        </g>\n                        <g id="Group_149" data-name="Group 149">\n                            <g id="Group_148" data-name="Group 148">\n                                <path id="Path_1034" data-name="Path 1034"\n                                        d="M189.648,189.273l-2.868-2.916v-3.03a.3.3,0,0,0-.6,0v3.153a.3.3,0,0,0,.087.21l2.952,3a.3.3,0,1,0,.429-.42Z"\n                                        fill="#6370a7"/>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n                {{tpbText.time}}\n            </label>\n            <div class="value">{{duration}}</div>\n        </div>\n        {% if settings.general.multipleLocations == \'1\' %}\n        <div class="location">\n            <label>\n                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">\n                    <g id="Group_153" data-name="Group 153" transform="translate(-358.104 -220.4)">\n                        <g id="Group_143" data-name="Group 143">\n                            <path id="Path_1030" data-name="Path 1030"\n                                    d="M364.1,223.19a2.933,2.933,0,1,0,3.1,2.93A3.023,3.023,0,0,0,364.1,223.19Zm0,5.155a2.229,2.229,0,1,1,2.36-2.225A2.3,2.3,0,0,1,364.1,228.345Z"\n                                    fill="#6370a7"/>\n                            <path id="Path_1031" data-name="Path 1031"\n                                    d="M364.1,220.4c-.069,0-.142,0-.212,0a5.868,5.868,0,0,0-5.756,5.1,5.425,5.425,0,0,0,.079,1.612,1.617,1.617,0,0,0,.043.189,5.21,5.21,0,0,0,.4,1.112,15.808,15.808,0,0,0,4.9,5.8.9.9,0,0,0,1.1,0,15.828,15.828,0,0,0,4.9-5.786,5.338,5.338,0,0,0,.4-1.12c.018-.068.03-.126.04-.18a5.369,5.369,0,0,0,.109-1.074A5.851,5.851,0,0,0,364.1,220.4Zm5.157,6.608c0,.005-.009.054-.03.143a4.96,4.96,0,0,1-.358.994,15.113,15.113,0,0,1-4.69,5.528.125.125,0,0,1-.076.025.135.135,0,0,1-.076-.025,15.146,15.146,0,0,1-4.7-5.54,4.73,4.73,0,0,1-.355-.985c-.019-.075-.028-.12-.031-.135l0-.017a4.784,4.784,0,0,1-.07-1.423,5.277,5.277,0,0,1,10.482.484A4.844,4.844,0,0,1,369.256,227.008Z"\n                                    fill="#6370a7"/>\n                        </g>\n                    </g>\n                </svg>\n                {{tpbText.location}}\n            </label>\n            <div class="value">{{location}}</div>\n        </div>\n        {% endif %}\n    </div>\n    <div class="extra-fields">\n        {% for field in extraFieldSets %}\n        <div class="element">\n            <label class="" for="{{ field.label }}">{{ field.label }}</label>\n            <p>{{field.value}}</p>\n        </div>\n\n        {% endfor %}\n    </div>\n    <div class="subtotal">\n        <div class="g-row bring">\n            <div class="label">{{tpbText.quantity}}</div>\n            <div class="value">{{qty}}</div>\n        </div>\n        <div class="g-row price">\n            <div class="label" data-price="{{total_price}}">{{tpbText.total_price}}</div>\n            <div class="value" data-qty="{{qty}}" data-total="{{total_price}}">{{ total_price | format_money :\n                window.moneyFormat }}\n            </div>\n        </div>\n    </div>\n</div>\n'};const s=l}}]);