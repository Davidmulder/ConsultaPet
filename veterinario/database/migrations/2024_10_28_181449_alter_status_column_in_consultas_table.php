<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AlterStatusColumnInConsultasTable extends Migration
{
    public function up()
    {
        DB::statement("ALTER TABLE consultas MODIFY COLUMN status ENUM('pendente', 'concluida', 'cancelado')");
    }

    public function down()
    {
        // Se quiser reverter a mudança, você pode definir o ENUM sem 'cancelado'
        DB::statement("ALTER TABLE consultas MODIFY COLUMN status ENUM('pendente', 'concluida')");
    }
}
