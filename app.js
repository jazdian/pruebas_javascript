
const p = {


}

const ele = {

    tabjs: document.querySelector('.tab1'),

    tabjq: $('.tab1'),

    btnCargaDatos: document.querySelector('#carga_datos'),
    
    txtNombre: document.querySelector('#icon_prefix'),

    txtTelefono: document.querySelector('#icon_telephone'),

    cmbOpciones: document.querySelector('#my_select'),

    btnUpdateDatos: document.querySelector('#update_datos'),

    txtValNombre: document.querySelector('#nombre'),

    txtValTelefono: document.querySelector('#telefono'),
     
    txtValOpt: document.querySelector('#val_opt'),
    
    txtOpt: document.querySelector('#text_opt'),

    tablaAlumnos: document.querySelector('#MiTablaServer') 

}

const f = {

    run: () => {

        console.log('iniciando programa');

        ele.tabjs.addEventListener('click', f.DetectaEvento);

        ele.tabjq.click(f.DetectaEventoJQ);

        ele.btnCargaDatos.addEventListener('click', f.CargaDatos);

        ele.btnUpdateDatos.addEventListener('click', f.GuardarDatos)

        // Para los select de Materialize css
        document.addEventListener('DOMContentLoaded', function() {
            
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, '');

            var mods = document.querySelectorAll('.modal');
            var instances = M.Modal.init(mods, '');

            f.GetDatsIniciales();

        });   

        f.funcionesTabla();

    },

    funcionesTabla: () => {
        // tabla completa
        console.log('=====objeto javascript ===============================');

        console.log('table: ', ele.tabjs);
        console.log('   |_rows.length: ', ele.tabjs.rows.length);
        ele.tabjs.rows[3].style.background = '#f8d7da';
        console.log('   |_rows[3].style.background = "#f8d7da"');

        console.log('=====objeto jquery ===============================');

        console.log('table: ', ele.tabjq);
        console.log('table[0]: ', ele.tabjq[0]);
        console.log('   |_rows.length: ', ele.tabjq[0].rows.length);
        ele.tabjq[0].rows[1].style.background = 'Yellow';
        console.log('   |_rows[3].style.background = "Amarillo"');

    },

    DetectaEvento: (e) => {

        console.log('=== JAVASCRIPT ================================================');
        
        console.log('click: ', e);
        console.log('   |_path: ', e.path);
        console.log('   |_srcElement: ', e.srcElement);
        console.log('   |_type: ', e.type);
        console.log('   |_timeStamp: ', e.timeStamp);
        console.log('   |_view: ', e.view);
        console.log('   |_target: ', e.target);
        console.log('       |_cellIndex: ', e.target.cellIndex);
        console.log('       |_childNodes: ', e.target.childNodes);
        console.log('       |_children: ', e.target.children);
        console.log('       |_outerHTML: ', e.target.outerHTML);
        console.log('       |_innerHTML: ', e.target.innerHTML);
        console.log('       |_parentNode: ', e.target.parentNode);
        console.log('           |_rowIndex: ', e.target.parentNode.rowIndex);
        console.log('           |_Cells[0].innerHTML: ', e.target.parentNode.cells[0].innerHTML);

    },

    DetectaEventoJQ: (e) => {
        
        console.log('=== JQUERY ===============================================');

        console.log('click: ', e);
        console.log('   |_currentTarget: ', e.currentTarget);
        console.log('   |_delegateTarget: ', e.delegateTarget);
        console.log('   |_handleObj: ', e.handleObj);
        console.log('   |   |_handler: ', e.handleObj.handler);
        console.log('   |   |_handler.name: ', e.handleObj.handler.name);
        console.log('   |_target: ', e.target);
        console.log('       |_cellIndex: ', e.target.cellIndex);
        console.log('       |_childNodes: ', e.target.childNodes);
        console.log('       |_children: ', e.target.children);
        console.log('       |_outerHTML: ', e.target.outerHTML);
        console.log('       |_innerHTML: ', e.target.innerHTML);
        console.log('       |_parentNode: ', e.target.parentNode);
        console.log('           |_rowIndex: ', e.target.parentNode.rowIndex);
        console.log('           |_Cells[0].innerHTML: ', e.target.parentNode.cells[0].innerHTML);
        
    },

    CargaDatos: (e) => {

        e.preventDefault();

        ele.txtNombre.value = "Rene Gonzalez Campos";
        ele.txtTelefono.value = "5530780461";
        M.updateTextFields();

        f.OptionSelectByText(ele.cmbOpciones, 'Option 2')
        // solo si el select es de materialize css
        $("#my_select").formSelect();
        
    },

    OptionSelectByText: (options, texto) =>{

        //convierte un htmlCollection en Array
        var arrOpt = [].slice.call( options.children );
        var i = 0;

        arrOpt.forEach(element => {

            if(element.text == texto)
            {
                document.querySelector('#my_select').selectedIndex = i;
                console.log('Texto seleccionado: ', element.text);
            }
            i++;
            
        });

    },

    GuardarDatos: (e)=>{

        e.preventDefault();

        ele.txtValNombre.innerHTML = `Nombre: ${ele.txtNombre.value}`;

        ele.txtValTelefono.innerHTML = `Telefono ${ele.txtTelefono.value}`;
        
        ele.txtValOpt.innerHTML = `Valor Combo: ${ele.cmbOpciones.value}`;
        
        ele.txtOpt.innerHTML = `Texto Combo: ${ele.cmbOpciones.options[ele.cmbOpciones.selectedIndex].text}`;      

    },

    GetDatsIniciales: ()=>{

        console.log('Entro en la funcion.');
        
        var data = new FormData();

        data.append('alumno', '2018-11.01');
        data.append('fecha_naci', '2018-11-30');
 
        fetch('fetch.php', { method: 'POST', body: data, })
        .then(function( res ) {
 
            return res.text();
 
        })
        .then(function(data){
            
            ele.tablaAlumnos.innerHTML = data;
            $('#MiTablaServer').show(1000);

        });

    }

}

f.run();