<?php

require_once 'Connection.php';
require_once 'DataAccess.php';
require_once 'DataTable.php';

class DatosAlumnos
{

    private function Conn()
    {

        $conn = new Connection('localhost', 'test', 'root', '');

        $link = $conn->SimpleConnectionPDO();

        return $link['obj_'];

    }

    private function DataAlumnos()
    {
        $data = new DataAccess();
        $data->SetConn($this->Conn());
        $data->setQuerycmd('Read');
        $data->setQuerycrud('SELECT * FROM alumno');

        $table = $data->ExecuteCommand();
        return $table['obj_'];

    }

    public function CrearTableHTML()
    {
        $dt =  new DataTable();
        $dt->SetDataSource($this->DataAlumnos());
        $dt->SetClass('responsive-table');
        $dt_string = $dt->CreateDataTable();

        return $dt_string;

    }

}

if(isset($_POST['alumno']))
{

    $da = new DatosAlumnos();

    $string_table = $da->CrearTableHTML();

    echo $string_table;

    // try {
    //     $db = new PDO('mysql:host=localhost;dbname=test;charset=utf8mb4', 'root', '');
    //     //echo 'Conectado a '.$db->getAttribute(PDO::ATTR_CONNECTION_STATUS);
    //     $result = $db->query("SELECT * FROM alumno");
    //     $datos = $result->fetchAll();
    //     echo json_encode($datos);
    // } 
    // catch(PDOException $ex) {
    //     echo 'Error conectando a la BBDD. '.$ex->getMessage(); 
    // }    

}








