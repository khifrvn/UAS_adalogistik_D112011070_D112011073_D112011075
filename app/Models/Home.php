<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Home extends Model
{
    use HasFactory;

    /**
     *  fillable
     *
     * @var array
     */
    protected $fillable = [
        'nama_barang',
        'harga',
        'stok',
    ];
}